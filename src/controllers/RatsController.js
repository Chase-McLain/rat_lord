import { missionsService } from '../services/MissionsService.js';
import { ratsService } from '../services/RatsService.js';
import BaseController from '../utils/BaseController.js';



export class RatsController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
    .get('', this.getRats)
    .get('/:ratId/missions', this.getMissionsForRat)



  }

  async getRats(request, response, next) {
    try {
      const rats = await ratsService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }



    async getMissionsForRat(request, response, next){
      try {
        const ratid = request.params.ratId
        const ratsMissions = await missionsService.getMissionsForRat(ratid)
        response.send(ratsMissions)
      } catch (error) {
        next(error)
      }
    }

}




