import { IEmailRequest } from "@/interfaces/Email";
import { sendMail } from "@/services/sendMail";
import { STATUS_CODES } from "http";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const requestEmail: IEmailRequest = await request.json();
  let subject = `Nuevo Contacto ${requestEmail.id}-${requestEmail.nombre}`;
  let html = JSON.stringify(requestEmail);
  html = "<p>Nuevo contacto a trav&eacute;s de la p&aacute;gina.</p>"
  html+= "<p>Datos del contacto</p>"
  html+='<ul>'
  html+= `<li>Nombre: ${requestEmail.nombre}</li>`
  html+= `<li>CUIT/CUIL: ${requestEmail.id}</li>`
  if (requestEmail.razonSocial.length > 0) { html += `<li>Raz&oacute;n social: ${requestEmail.razonSocial}</li>`}
  html+= `<li>Importacion de bienes: ${requestEmail.importacionBienes}</li>`
  html+= `<li>Email: ${requestEmail.email}</li>`
  html += `<li>Tel&eacute;fono: ${requestEmail.telefono}</li>`
  if(requestEmail.mensaje.length>0){html+= `<li>Mensaje: ${requestEmail.mensaje}</li>`}
  html+='</ul>'
  html+= "<p>Banco de Comercio</p>"
  if(process.env.EMAIL_TARGET_USER===undefined){
    return NextResponse.error();
//     return NextResponse.json({ status: STATUS_CODES[500],body:`Configuration Error: Please specify target email account.` });
  }
  try{

    const result = await sendMail({
      from: process.env.EMAIL_USER!,
      to: process.env.EMAIL_TARGET_USER,
      subject,
      html,
    });
    if(!result){
      //{ status: STATUS_CODES[400],body:`There was an error trying to send the email.` }
      return NextResponse.error();
    }
  }catch(error){
    return NextResponse.error();
    // return NextResponse.json({ status: STATUS_CODES[500],body:`Error: ${error}` });

  }
  return NextResponse.json({ status: STATUS_CODES[200] });
}
