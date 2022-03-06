module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :users, Types::UserType.connection_type, null: true do
      description "select user"
    end

    def users
      User.all.order(id: :desc)
    end
  end
end
