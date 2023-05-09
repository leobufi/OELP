class CansController < ApplicationController
  def new
    @can = Can.new
  end

  def create
    @can = Can.new(can_params)
    if current_admin.admin?
      @can.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
    @can = Can.find(params[:id])
  end

  def update
    @can = Can.find(params[:id])
    if current_admin.admin?
      @can.update(can_params)
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def destroy
    @can = Can.find(params[:id])
    @can.destroy
    redirect_to dashboard_path
  end

  private

  def can_params
    params.require(:can).permit(:title, :content, :label, :color)
  end
end
