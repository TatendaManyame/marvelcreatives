import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Send email to your business
    const { data, error } = await resend.emails.send({
      from: "Marvel Website <https://marvelcreatives.vercel.app/>",
      to: ["creativesmarvel@gmail.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #999; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>📬 New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Name</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">📧 Email</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">📱 Phone</div>
                  <div class="value">${phone || "Not provided"}</div>
                </div>
                <div class="field">
                  <div class="label">💬 Message</div>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
                </div>
                <div class="footer">
                  <p>This message was sent from the Marvel Creatives website contact form.</p>
                  <p>Reply directly to ${email} to respond to this inquiry.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    // Send auto-reply to the user
    await resend.emails.send({
      from: "Marvel Creatives <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Marvel Creatives",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .highlight { color: #dc2626; font-weight: bold; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #999; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✨ Thank You for Reaching Out!</h1>
              </div>
              <div class="content">
                <p>Dear <strong>${name}</strong>,</p>
                <p>Thank you for contacting <span class="highlight">Marvel Creatives</span>! We have received your message and will get back to you within <strong>24 hours</strong>.</p>
                
                <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="margin-top: 0;">📋 Your Inquiry Summary</h3>
                  <p><strong>Message:</strong> ${message.substring(0, 100)}${message.length > 100 ? "..." : ""}</p>
                </div>
                
                <p>In the meantime, feel free to:</p>
                <ul>
                  <li>📱 Call us at <strong>+263 788 991 893</strong></li>
                  <li>📧 Reply to this email</li>
                  <li>🌐 Visit our website for more information</li>
                </ul>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb;">
                  <p style="margin: 0;">Best regards,</p>
                  <p style="margin: 5px 0 0 0; font-size: 18px; font-weight: bold; color: #dc2626;">Marvel Creatives Team</p>
                  <p style="margin: 0; color: #999; font-size: 14px;">Transforming brands through creative excellence</p>
                </div>
                <div class="footer">
                  <p>© ${new Date().getFullYear()} Marvel Creatives. All rights reserved.</p>
                  <p>88 Central Avenue, Harare | Cnr 8th & Central Avenue | @The Waves Plaza Complex</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Error in contact form:", error);
    return Response.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}