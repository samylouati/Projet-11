const API_BASE_URL = "http://localhost:3001/api/v1";

//Appel API pour log
export async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Appel API pour info utilisateur
export async function getUserProfile() {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    throw new Error('Token is missing');
  }

  try {
    const response = await fetch(`${API_BASE_URL}/user/profile`, {
      method: 'POST', // Vérifie le verbe HTTP
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Ajouter le token dans l'en-tête Authorization
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user profile');
    }

    const data = await response.json();

    // Log de la réponse API
    console.log('User Profile Data:', data);

    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
}
