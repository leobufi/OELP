class PhotosController < ApplicationController
  def new
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if current_admin.admin?
      @photo.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
    @photo = Photo.find(params[:id])
  end

  def update
    @photo = Photo.find(params[:id])
    if current_admin.admin?
      @photo.update(photo_params)
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
  end

  private

  def photo_params
    params.require(:photo).permit(:photo, :side)
  end
end
