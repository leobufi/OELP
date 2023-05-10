class InstagramsController < ApplicationController
  def new
    @instagram = Instagram.new
  end

  def create
    @instagram = Instagram.new(instagram_params)
    if current_admin.admin?
      @instagram.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
    @instagram = Instagram.find(params[:id])
  end

  def update
    @instagram = Instagram.find(params[:id])
    if current_admin.admin?
      @instagram.update(instagram_params)
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def destroy
    @instagram = Instagram.find(params[:id])
    @instagram.destroy
  end

  private

  def instagram_params
    params.require(:instagram).permit(:top_left_photo, :top_right_photo, :bottom_left_photo, :bottom_right_photo, :link)
  end
end
