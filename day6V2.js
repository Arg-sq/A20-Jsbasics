const apiResponse = {
  data: [
    {
      id: 1,
      name: "diya",
      isAdmin: false,
      hasUserManagementAccess: false,
      experience: 0,
      agentsId: [4, 5, 6, 7, 8],
    },
    {
      id: 2,
      name: "aaryan",
      isAdmin: true,
      hasUserManagementAccess: false,
      experience: 10,
      agentsId: [10, 11, 12, 13, 14, 15],
    },
    {
      id: 3,
      name: "amritanshu",
      isAdmin: true,
      hasUserManagementAccess: true,
      experience: 2,
      agentsId: [],
    },
  ],
  code: 201,
  responseText: "Users fetched successfully",
};

const giveUserMnAccess = () => {
  const users = apiResponse.data;
  const updatedUsers = users.map((userDetail) => {
    if (userDetail.isAdmin && !userDetail.hasUserManagementAccess) {
      return {
        ...userDetail,
        hasUserManagementAccess: true,
      };
    } else {
      return userDetail;
    }
  });

  return updatedUsers;
};

// console.log(giveUserMnAccess());

// exp ===0  agentsId=[]
// exp>=1 agentsId =[a,b,c,d]

// arr=[4,5,6,7,8, 14, 15]

const assignAgents = () => {
  let availableAgents = [];
  const updatedUsers = apiResponse.data.map((userDetails) => {
    if (userDetails.experience === 0) {
      availableAgents = [...availableAgents, ...userDetails.agentsId];
      return { ...userDetails, agentsId: [] };
    } else {
      if (userDetails.agentsId.length === 4) {
        return userDetails;
      } else {
        let userHasThisNumberOfAgent = userDetails.agentsId.length;
        if (userHasThisNumberOfAgent < 4) {
          const userNeedsThisNoOfAgent = 4 - userHasThisNumberOfAgent;
          const agentsForUser = availableAgents.slice(
            0,
            userNeedsThisNoOfAgent
          );
          return {
            ...userDetails,
            agentsId: [...userDetails.agentsId, ...agentsForUser],
          };
        } else {
          const removeThisAgents = userDetails.agentsId.slice(4);
          availableAgents = [
            ...apiResponse.availableAgents,
            ...removeThisAgents,
          ];
          return {
            ...userDetails,
            agentsId: userDetails.agentsId.slice(0, 4),
          };
        }
      }
    }
  });
  return updatedUsers;
};

console.log(assignAgents());
