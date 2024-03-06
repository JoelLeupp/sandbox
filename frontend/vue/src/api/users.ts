import { FrontendUser } from './models';
// import { AdminClient } from './types'
import { api } from '../boot/axios';
// import { FrontendClientMock } from './mock/FrontendClientMock'
// import { IAdminClient, IFrontendClient } from './interfaces'

const frontendUser: FrontendUser = new FrontendUser(CFG.API_BASE_URL, api);
// const frontendUser: FrontendUser = new FrontendUserMock(undefined, api)

export { frontendUser };
