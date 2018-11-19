Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :channels do
      collection do
        get 'fetchOne', :to => 'channels#fetchOne', :as => :fetchOne
        get 'fetchForeignChannels', :to => 'channels#fetchForeignChannels', :as => :fetchForeignChannels

      end
      member do
        get 'fetchChannelUsers', :to => 'channels#fetchChannelUsers', :as => :fetchChannelUsers
      end
    end
    resources :channel_memberships, only:[:create]
  end

root "static_pages#root"
end
