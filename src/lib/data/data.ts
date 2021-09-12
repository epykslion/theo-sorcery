import { UserModel } from '$lib/models/classes';

export const userData: UserModel[] = [
	{
		name: 'Theodore Nikolai Idris',
		job: 'Content Creator & Tech Geek',
		id: 'theonikolai',
	},
].map((value) => new UserModel().deserialize(value));
