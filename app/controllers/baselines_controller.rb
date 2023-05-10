class BaselinesController < ApplicationController
  def new
    @baseline = Baseline.new
  end

  def create
    @baseline = Baseline.new(baseline_params)
    if current_admin.admin?
      @baseline.save
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def edit
    @baseline = Baseline.find(params[:id])
  end

  def update
    @baseline = Baseline.find(params[:id])
    if current_admin.admin?
      @baseline.update(baseline_params)
      redirect_to dashboard_path
    else
      render :new
    end
  end

  def destroy
    @baseline = Baseline.find(params[:id])
    @baseline.destroy
  end

  private

  def baseline_params
    params.require(:baseline).permit(:baseline)
  end
end
