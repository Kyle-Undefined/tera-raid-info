import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

@NgModule({
	exports: [ApolloModule],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory: (httpLink: HttpLink) => {
				const cache = new InMemoryCache();

				return {
					link: httpLink.create({
						uri: 'https://graphqlpokemon.favware.tech/v8',
					}),
					cache,
					defaultOptions: {
						/*
							need to get cache pulls working, don't know how to 
							make my code work with it currently 
							(moves go missing when pulling from cache)
						*/
						query: {
							fetchPolicy: 'network-only',
							errorPolicy: 'all',
						},
					},
				};
			},
			deps: [HttpLink],
		},
	],
})
export class GraphQLModule {}
