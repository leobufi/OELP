class PagesController < ApplicationController
  before_action :authenticate_admin!, only: :dashboard

  def home
  end

  def dashboard
    if current_admin.admin?
      @cans = Can.all
      @brand_infos = BrandInfo.all
      @baselines = Baseline.all
      @photos = Photo.all
      @instagrams = Instagram.all
    end
  end

end
