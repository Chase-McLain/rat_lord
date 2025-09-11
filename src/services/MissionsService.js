import { dbContext } from "../db/DbContext.js"




class MissionsService{
  async getMissions() {
    const missions = await dbContext.Missions.find().populate('location').populate('rat', '-name -picture')
    return missions
  }
  
  
  
  async createMission(missionData) {
    const newMission = await dbContext.Missions.create(missionData)
    await newMission.populate('location')
    await newMission.populate('rat', '-name -picture')
    return newMission
  }
  
 async getMissionsForRat(ratid) {
   const ratsMissions = await dbContext.Missions.find({ratId: ratid}).populate('location')
    return ratsMissions
  }

  async getMissionsForLocation(locationid) {
     const locationsMissions = await dbContext.Missions.find({locationId: locationid}).populate('rat', '-name -picture')
     return locationsMissions
   }

}






export const missionsService = new MissionsService()




