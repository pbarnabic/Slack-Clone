Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :channels do
      collection do
        get 'fetchOne', :to => 'channels#fetchOne', :as => :fetchOne
      end
      member do
        get 'fetchChannelInfo', :to => 'channels#fetchChannelInfo', :as => :fetchChannelInfo
      end
    end
    resources :channel_memberships, only:[:create]
    resources :conversations, only: [:index,:create, :show]
    resources :messages do
      collection do
        get 'search', :to => 'messages#search', :as => :search
      end
    end
    resources :direct_messages do
      collection do
        # get 'fetchOne', :to => 'channels#fetchOne', :as => :fetchOne
        get 'dm_candidates', :to => 'direct_messages#dm_candidates', :as => :dm_candidates
      end
    end

  end
  mount ActionCable.server => '/cable'
  root "static_pages#root"
end
