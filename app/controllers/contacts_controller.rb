class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])
    @contact.request = request
    if @contact.deliver
      flash[:notice] = 'Your message have been sent, thank you! We\'ll answer you as soon as we can.'
    else
      flash[:error] = 'Sorry, we can\'t receive your message... Try again later or write us at phgastel(a)gmail.com'
    end
    redirect_to root_path
  end
end
