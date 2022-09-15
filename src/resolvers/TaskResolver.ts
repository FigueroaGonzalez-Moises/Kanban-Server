import { Mutation, Resolver } from "type-graphql";

@Resolver()
export class TaskResolver {
	@Mutation(() => String)
	CreateNewTask() {
		//do something

		return "success code here";
	}
}
