class Contact < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: /\A[^@\s]+@[^@\s]+\z/i
  attribute :message, validate: true
  attribute :nickname, captcha: true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: "You received an email from #{name} - Où est la plage?",
      to: "bufi.leo@gmail.com",
      from: "#{name} - <#{email}>"
    }
  end
end
