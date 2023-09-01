import { CheckListBuilder } from "../check-list.builder";

export class StubCheckListBuilder extends CheckListBuilder {
  protected override id = 'id-check-list';
  protected override name = 'Check-list';
  protected override tasks = [];
}
