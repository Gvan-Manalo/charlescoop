<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class resendOtp extends Mailable
{
    use Queueable, SerializesModels;
 public $code;
 public $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($code,$email)
    {
       $this->code = $code;
       $this->email = $email;

       
    }
    public function build(){

        $code = $this->code;
        $email = $this ->email;
        return $this->to($email)->subject($code);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Resend Otp',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            markdown: 'mail.resend-mail',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}