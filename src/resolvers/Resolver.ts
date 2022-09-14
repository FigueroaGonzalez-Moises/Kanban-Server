import { Query, Resolver } from "type-graphql";

@Resolver()
export class KanbanResolver {
	@Query(() => String)
	hello() {
		return "hello";
	}
}
