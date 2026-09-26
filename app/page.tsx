"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

interface MapWindow extends Window {
  google: {
    maps: {
      Map: any;
      Marker: any;
      InfoWindow: any;
      Animation: any;
    };
  };
}

export default function MapsPage() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_PUBLIC_KEY;

    if (!key) {
      setError(
        "Google Maps API key not configured. Please set NEXT_PUBLIC_GOOGLE_MAPS_PUBLIC_KEY environment variable in Cloudflare Pages settings."
      );
      setIsLoading(false);
      return;
    }

    if (!mapRef.current) return;

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places,marker&loading=async`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (!mapRef.current) return;
      
      const googleWindow = window as unknown as MapWindow;
      if (!googleWindow.google) {
        setError("Google Maps failed to load");
        setIsLoading(false);
        return;
      }

      try {
        const map = new googleWindow.google.maps.Map(mapRef.current, {
          center: {
            lat: 37.5079,
            lng: 15.083,
          },
          zoom: 14,
          mapTypeControl: true,
          fullscreenControl: true,
          streetViewControl: true,
          zoomControl: true,
          gestureHandling: "auto",
        });

        // Main marker
        const marker = new googleWindow.google.maps.Marker({
          map,
          position: {
            lat: 37.5079,
            lng: 15.083,
          },
          title: "Simone & Jovita Maps Main Location",
          animation: googleWindow.google.maps.Animation.DROP,
        });

        // Info window
        const infoWindow = new googleWindow.google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; font-family: Arial, sans-serif;">
              <h3 style="margin: 0 0 8px; font-size: 1rem; color: #1a1a2e;">Simone & Jovita Maps</h3>
              <p style="margin: 0; font-size: 0.9rem; color: #666;">Via Sant'Anna 8</p>
              <p style="margin: 4px 0 0; font-size: 0.9rem; color: #666;">Catania, Sicily 95124, Italy</p>
            </div>
          `,
          maxWidth: 300,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });

        // Open info on page load
        infoWindow.open(map, marker);

        setIsLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to initialize map"
        );
        setIsLoading(false);
      }
    };

    script.onerror = () => {
      setError(
        "Failed to load Google Maps. Check your API key and domain restrictions."
      );
      setIsLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <main className="main-container">
      <header className="header">
        <div className="header-content">
          <h1>Simone & Jovita Maps</h1>
          <p>Luxury Google Maps Address Registration Platform</p>
          <p className="subtitle">Interactive Mapping & Location Services</p>
        </div>
      </header>

      <section className="map-section">
        {isLoading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading map...</p>
          </div>
        )}
        {error && (
          <div className="error-state">
            <p>⚠️ {error}</p>
          </div>
        )}
        <div
          ref={mapRef}
          className="map-container"
          style={{
            width: "100%",
            height: "600px",
            borderRadius: "16px",
            overflow: "hidden",
            display: isLoading ? "none" : "block",
          }}
          aria-label="Google Maps showing main location"
        />
      </section>

      <section className="details-section">
        <div className="details-content">
          <h2>Main Location</h2>
          <div className="address-card">
            <h3>Simone & Jovita Maps</h3>
            <p className="address-line">📍 Via Sant'Anna 8</p>
            <p className="address-line">🏢 Catania, Sicily 95124</p>
            <p className="address-line">🇮🇹 Italy</p>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <h4>Geofencing Radius</h4>
              <p>100 meters</p>
            </div>
            <div className="info-item">
              <h4>Map Provider</h4>
              <p>Google Maps</p>
            </div>
            <div className="info-item">
              <h4>Status</h4>
              <p className="status-active">Active</p>
            </div>
            <div className="info-item">
              <h4>Coordinates</h4>
              <p>37.5079°N, 15.083°E</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Simone & Jovita Maps. All rights reserved.</p>
        <p className="deployment-info">
          Deployed on{" "}
          <a
            href="https://pages.cloudflare.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloudflare Pages
          </a>
        </p>
      </footer>
    </main>
  );
}