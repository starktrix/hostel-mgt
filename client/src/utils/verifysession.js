const verifysession = async () => {
    let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/verifysession`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({token: sessionStorage.getItem("token")})
    });

    let result = await response.json();
    if (result.success) {
      if (result.data.isAdmin) {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/student-dashboard";
      }
    }
    else {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("student");
    }
  };

  export default verifysession;