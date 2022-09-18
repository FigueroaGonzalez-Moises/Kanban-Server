import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class TaskResolver {
	@Query(() => String)
	hello() {
		return "hello";
	}
	// @Mutation(() => String)
	// CreateNewTask() {
	// 	//do something

	// 	return "success code here";
	// }
}
