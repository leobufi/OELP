class BrandInfosController < ApplicationController
  def new
    @brand_info = BrandInfo.new
  end

  def create
    @brand_info = BrandInfo.new(brand_info_params)
    if current_admin.admin?
      @brand_info.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
    @brand_info = BrandInfo.find(params[:id])
  end

  def update
    @brand_info = BrandInfo.find(params[:id])
    if current_admin.admin?
      @brand_info.update(brand_info_params)
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def destroy
    @brand_info = BrandInfo.find(params[:id])
    @brand_info.destroy
    redirect_to dashboard_path
  end

  private

  def brand_info_params
    params.require(:brand_info).permit(:title, :content, :side)
  end
end
