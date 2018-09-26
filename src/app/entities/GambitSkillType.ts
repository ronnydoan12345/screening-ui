import { GambitSkill } from './GambitSkill';

/**
 * SkillType stores the main curriculum for a Revature training batch, such as:
 * PEGA, MicroServices, Appian, JTA, .NET, etc.
 */

export class GambitSkillType {
  skillTypeId: number;
  skillTypeName: string;
  skillTypeDesc: string;
  skills: Array<GambitSkill>; //GambitSkill -->Bucket
  isActive: boolean;
  isCore: boolean;
}


//kill with fire
