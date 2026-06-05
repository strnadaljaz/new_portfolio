import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message, website } = await req.json();

    if (website) {
        return Response.json({ success: true }); // silently ignore bots
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.APP_PASSWORD,
        },
    });
    try {
        await transporter.verify();
    } catch (err: any) {
        console.error(err);
        return Response.json({
            success: false,
            error: err
        },
        {
            status: 502
        },
        )
    }

    const msg = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_RECEIVER,
        subject: "New form submition",
        text: [
            `Ime: ${name}`,
            `Email: ${email}`,
            `Sporocilo: ${message}`,
        ].join('\n'),
    };

    try {
        const info = await transporter.sendMail(msg);

        return Response.json(
            {
                success: true
            },
            { status: 200 },
        );
    } catch (err: any) {
        console.error(err);
        return Response.json(
            {
                success: false,
                error: err?.message || err,
            },
            { status: 500 }
        );
    }
}
