Rails.application.routes.draw do
  match '/graphql', controller: 'graphql', action: 'execute', via: [:post, :options, :get]

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end
end
