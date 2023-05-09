class PagesController < ApplicationController
  before_action :authenticate_admin!, only: :dashboard

  def home
  end

  def dashboard
    if current_admin.admin?
      @cans = Can.all
    end
  end

end