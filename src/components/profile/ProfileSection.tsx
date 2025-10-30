'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Base URL for your customer API
const API_BASE_URL: string = 'https://ecomm.braventra.in/api/customer'; 

interface UserProfile {
  customer_id: number;
  name: string;
  email: string;
  phone_number: string;
  address: string; // Used as Billing Address
}

const ProfileSection: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        // If no token, force redirect to login
        router.push('/login'); 
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/profile`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Pass the JWT for authentication
          },
        });

        const result = await response.json();

        if (!response.ok || result.status !== 200 || !result.profile) {
          // Fix 1: If token is invalid or API fails, log out
          console.error("Profile fetch failed:", result.error || "Invalid response structure.");
          setError(result.error || "Session expired or profile load failed.");
          handleLogout(); 
          return;
        }

        // Fix 2: Correctly access the nested profile data from the backend response
        setProfile(result.profile);
        
      } catch (err: unknown) {
        console.error("Network error fetching profile:", err);
        setError("A network error occurred. Please check your connection.");
        handleLogout();
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleLogout = (): void => {
    // 1. Clear local storage data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');

    // 2. Redirect to the login page, forcing a full page reload to clear state
    router.push('/login');
    // window.location.reload(); // Optional: A hard reload ensures all component states reset
  };

  // --- UI RENDER LOGIC ---

  if (loading) {
    return (
      <div className="col-12 d-flex justify-content-center">
        <div className="tptrack__content grey-bg p-5 text-center" style={{ width: '100%', maxWidth: '600px' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading profile data...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="col-12 d-flex justify-content-center">
        <div className="tptrack__content grey-bg p-5 text-center" style={{ width: '100%', maxWidth: '600px' }}>
          <p className="alert alert-danger">{error || "Profile data unavailable. Please log in again."}</p>
          <button 
            className="tptrack__submition tpsign__reg btn btn-sm mt-3" 
            onClick={handleLogout}
            style={{ backgroundColor: '#ff7043', borderColor: '#ff7043', color: 'white', padding: '8px 20px', borderRadius: '5px' }}
          >
            <i className="fal fa-sign-out-alt me-2"></i> Relog / Logout
          </button>
        </div>
      </div>
    );
  }

  // Beautiful and Responsive Profile Display
  return (
    // Responsive container: centered, takes full width on mobile, max-width on desktop
    <div className="col-12 d-flex justify-content-center"> 
      <div className="tptrack__product mb-40 shadow-lg" style={{ width: '100%', maxWidth: '700px' }}>
        <div className="tptrack__content bg-white p-4 p-md-5 rounded-3">
          
          {/* Header Section */}
          <div className="d-flex align-items-center mb-4 pb-3 border-bottom">
            <div className="tptrack__item-icon me-3">
              <i className="fal fa-user-circle fa-3x text-primary"></i>
            </div>
            <div className="tptrack__item-content">
              <h1 className="tptrack__item-title mb-0 fs-4 fw-bold text-dark">{profile.name}</h1>
              <p className="text-muted mb-0">Customer ID: #{profile.customer_id}</p>
            </div>
          </div>

          {/* Account Details Section */}
          <div className="profile-details">
            <h4 className="mb-3 text-secondary">Your Account Information</h4>
            
            <ul className="list-group list-group-flush mb-4">
              
              <li className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-3">
                <strong className="text-dark">
                    <i className="fal fa-envelope me-2 text-primary"></i> Email:
                </strong>
                <span className="text-end text-break mt-1 mt-sm-0">{profile.email}</span>
              </li>

              <li className="list-group-item d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-3">
                <strong className="text-dark">
                    <i className="fal fa-phone me-2 text-primary"></i> Phone:
                </strong>
                <span className="text-end mt-1 mt-sm-0">{profile.phone_number}</span>
              </li>
              
              <li className="list-group-item py-3">
                <strong className="text-dark d-block mb-2">
                    <i className="fal fa-map-marker-alt me-2 text-primary"></i> Billing Address:
                </strong>
                <p className="mb-0 p-3 bg-light rounded-3 border text-break">{profile.address}</p>
              </li>
            </ul>

            {/* Logout Button: Styled for emphasis and usability */}
            <button 
              className="tptrack__submition w-100 mt-3 border-0 fw-bold" 
              onClick={handleLogout}
              style={{ 
                  backgroundColor: '#ff5722', 
                  color: 'white', 
                  padding: '12px 0', 
                  borderRadius: '8px', 
                  transition: 'background-color 0.3s' 
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e64a19')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#ff5722')}
            >
              <i className="fal fa-sign-out-alt me-2"></i> Secure Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
