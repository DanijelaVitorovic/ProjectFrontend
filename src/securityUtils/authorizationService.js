const roleToIdMap = {
    admin: 1,
    user: 2
  };
  
  const authorizationService = {
    canAccessAdminPanel: user => {
      const roles = user.roles || [];
      if (roles.find(r => r.id === roleToIdMap.admin)) {
        return true;
      }
    }
  };
  
  export default authorizationService;