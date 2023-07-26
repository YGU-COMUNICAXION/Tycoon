import React from "react";
import "./avisoprivacidad.css";

const AvisoPrivacidad = ({ isSimple }) => {
  return (
    <section className="avisoPrivacidad">
      {isSimple ? (
        <h1>Aviso de Privacidad Simple</h1>
      ) : (
        <h1>Aviso de Privacidad Integral</h1>
      )}

      <p>
        Tycoon Enterprises, S. A. de C. V. (Tycoon), como responsable de la
        recopilación, tratamiento y protección de sus datos personales, con
        domicilio en Avenida Prolongación Paseo de la Reforma 621, Piso 10,
        Colonia Paseo de las Lomas, Alcaldía Álvaro Obregón, C.P. 01330, Ciudad
        de México, pone a su disposición los términos y condiciones de nuestro
        aviso de privacidad integral, de conformidad con lo dispuesto en los
        artículos 8, 15, 16, 33 y 36 de la Ley Federal de Protección de Datos
        Personales en Posesión de los Particulares.
      </p>

      <h2>Datos personales recabados</h2>
      <p>Datos personales proporcionados directamente:</p>
      <ul>
        <li>Nombre completo.</li>
        <li>Correo electrónico.</li>
      </ul>
      <p>
        Voluntariamente el usuario/cliente, podrá proporcionar información
        adicional de contacto como su número telefónico y la posición que
        desempeña en su trabajo actual.
      </p>

      {!isSimple && (
        <p>
          Le informamos que sus datos personales no son compartidos con
          terceros, ni dentro ni fuera del país.
        </p>
      )}

      <h2>Finalidad de tratamiento de datos</h2>
      <p>
        A) Los datos personales que recabamos de usted, los utilizaremos para
        las siguientes finalidades que son necesarias para prestar el servicio
        solicitado:
      </p>
      <ul>
        <li>Contactarlo para los siguientes fines:</li>
        <ul>
          <li>
            Proveer los servicios e información que haya solicitado de manera
            directa o a través de la página web{" "}
            <a href="https://www.tycoon.mx">www.tycoon.mx</a>
          </li>
          <li>
            Informarle sobre cambios en las condiciones de dichos servicios.
          </li>
          <li>
            Contactar al usuario/cliente cuando expresamente haya proporcionado
            sus datos para participar en alguna dinámica o activación de la que
            resulte ganador.
          </li>
        </ul>
      </ul>

      <p>Finalidades secundarias.</p>
      <p>
        B) De manera adicional, utilizaremos su información personal para las
        siguientes finalidades que no son necesarias para prestar el servicio
        solicitado pero que nos permiten y facilitan brindarle una mejor
        atención:
      </p>
      <ul>
        <li>Estudiar hábitos de consumo.</li>
        <li>Evaluar la calidad de los servicios que prestamos.</li>
      </ul>

      {isSimple ? (
        <>
          <p>
            La información proporcionada en ningún caso es almacenada por Tycoon
            para usos distintos a los señalados en este apartado.
          </p>

          <p>
            Si usted no desea que sus datos personales sean utilizados para las
            finalidades secundarias señaladas, puede negarnos su consentimiento:
            (i) desde este momento seleccionando la opción “ no deseo que se
            utilicen mis datos personales para finalidades secundarias ”,
            especificando aquéllas para las que no desea que utilicemos sus
            datos personales, en el entendido de que su negativa no será motivo
            para dejar de dar trámite al servicio o información solicitada; o
            (ii) dentro de los cinco días hábiles posteriores a la fecha en que
            nos haya proporcionado sus datos y, por lo tanto, aceptado el
            presente aviso de privacidad para lo cual deberá contactar a Luz
            Adriana Azuela en nuestro departamento Legal vía telefónica al{" "}
            <a href="tel:5553957833">5553957833 extensión 288</a>, o por correo
            electrónico a <a href="mailto:aviso@tycoon.mx">aviso@tycoon.mx</a>,
            en el que especifique la o las finalidades secundarias para las que
            no desea que utilicemos sus datos personales.
          </p>
        </>
      ) : (
        <p>
          La información proporcionada, en ningún caso es almacenada por Tycoon
          para usos distintos a los señalados en este apartado. Si usted no
          desea que sus datos personales sean tratados para las finalidades
          secundarias señaladas, puede negarnos su consentimiento desde este
          momento marcando en la siguiente tabla aquellas opciones para las que
          no desea que sus datos personales sean utilizados.
        </p>
      )}

      {!isSimple ? (
        <>
          <table>
            <tr>
              <th>Finalidades Secundarias</th>
              <th>Negativa del Uso</th>
            </tr>
            <tr>
              <td>Estudiar hábitos de consumo.</td>
              <td></td>
            </tr>
            <tr>
              <td>Evaluar la calidad de los servicios que prestamos.</td>
              <td></td>
            </tr>
          </table>

          <p>
            Su negativa para estas finalidades no será motivo para dejar de
            prestar el servicio o información solicitada.
          </p>

          <h2>Transferencia de datos personales</h2>

          <p>
            Tycoon Enterprises no realizará ninguna transferencia de datos a
            terceros nacionales o internacionales. Entendiéndose por
            "transferencia" cualquier comunicación de datos personales dentro o
            fuera del territorio nacional, realizada a persona distinta del
            titular, del responsable o del encargado.
          </p>

          <h2>
            Medios y Procedimientos para ejercer derechos ARCO (Acceso,
            Rectificación, Cancelación y Oposición)
          </h2>
          <p>
            Usted tiene derecho a acceder, rectificar y cancelar sus datos
            personales en cualquier momento, así como a oponerse al tratamiento
            de los mismos. Para ejercer cualquiera de estos derechos, favor de
            contactar a Luz Adriana Azuela en nuestro departamento Legal vía
            telefónica al <a href="tel:5553957833">5553957833</a> extensión 288,
            o por correo electrónico a{" "}
            <a href="mailto:aviso@tycoon.mx">aviso@tycoon.mx</a>
          </p>

          <p>
            La solicitud deberá de contener la siguiente información y
            documentación:
          </p>
          <ol>
            <li>
              El nombre del titular, domicilio, correo electrónico, número
              telefónico u otro medio para comunicarle la respuesta a su
              solicitud.
            </li>
            <li>
              Los documentos que acrediten la identidad o, en su caso, la
              representación legal del titular (credencial del INE o documento
              de identidad nacional aplicable, pasaporte, poder notarial).
            </li>
            <li>
              La descripción clara y precisa de los datos personales respecto de
              los que se busca ejercer alguno de los derechos antes mencionados.
            </li>
            <li>
              Cualquier otro elemento o documento que facilite la identificación
              y localización de los datos personales.
            </li>
          </ol>

          <p>
            El responsable comunicará al titular a través del medio designado en
            la solicitud, en un plazo máximo de veinte días, contados desde la
            fecha en que se recibió la solicitud de acceso, rectificación,
            cancelación u oposición, la determinación adoptada, a efecto de que,
            si resulta procedente, se haga efectiva la misma dentro de los
            quince días siguientes a la fecha en que se comunica la respuesta.
          </p>

          <p>
            La información o datos personales solicitados serán otorgados para
            su acceso por medio de documentos electrónicos, copia simple o
            cualquier otra modalidad que resulte aplicable al caso.
          </p>

          <br />

          <h2>Procedimiento de Revocación del Consentimiento</h2>
          <p>
            Usted podrá revocar el consentimiento respecto al tratamiento de sus
            datos personales en cualquier momento, su revocación no producirá
            efectos retroactivos. Sin embargo, es importante que tenga en cuenta
            que no en todos los casos podremos atender su solicitud o concluir
            el uso de forma inmediata, ya que es posible que por alguna
            obligación legal requiramos seguir tratando sus datos personales.
            Asimismo, usted deberá considerar que, para ciertos fines, la
            revocación de su consentimiento implicará que no le podamos seguir
            prestando el servicio que nos solicitó, o la conclusión de su
            relación con nosotros.
          </p>

          <p>
            Para revocar su consentimiento podrá hacer la solicitud
            correspondiente por medio de nuestra página web{" "}
            <a href="https://www.tycoon.mx">www.tycoon.mx</a> en la parte
            inferior dentro de la sección “Privacidad” y dando click en la
            opción “Revocación del consentimiento”, o contactando a Luz Adriana
            Azuela en nuestro departamento Legal vía telefónica al{" "}
            <a href="tel:5553957833">5553957833</a> extensión 288, o por correo
            electrónico a <a href="mailto:aviso@tycoon.mx">aviso@tycoon.mx</a>
          </p>

          <p>
            La solicitud deberá de incluir la siguiente información y
            documentos:
          </p>
          <ol>
            <li>
              El nombre del titular y domicilio, correo electrónico, número
              telefónico u otro medio para comunicarle la respuesta a su
              solicitud.
            </li>
            <li>
              Los documentos que acrediten la identidad o, en su caso, la
              representación legal del titular;
            </li>
            <li>
              La descripción clara y precisa de los datos personales respecto de
              los que se busca ejercer el derecho antes mencionado, y
            </li>
            <li>
              Cualquier otro elemento o documento que facilite la localización
              de los datos personales.
            </li>
          </ol>

          <p>
            El responsable comunicará al titular a través del medio designado en
            la solicitud, en un plazo máximo de veinte días, contados desde la
            fecha en que se recibió la solicitud de revocación de
            consentimiento, la determinación adoptada, a efecto de que, si
            resulta procedente, se haga efectiva la misma dentro de los quince
            días siguientes a la fecha en que se comunica la respuesta.
          </p>

          <h2>
            Uso de cookies (aplica únicamente para usuarios de la página web)
          </h2>
          <p>
            Le informamos que en nuestra página de Internet utilizamos cookies y
            web beacons a través de las cuales es posible monitorear su
            comportamiento como usuario de Internet para obtener su dirección
            IP, horario de navegación, tiempo de navegación en nuestra página de
            Internet, secciones consultadas, y páginas de Internet accedidas
            previo a la nuestra, así como brindarle un mejor servicio y
            experiencia de usuario al navegar en nuestra página.
          </p>

          <p>
            Las cookies son archivos de texto descargados automáticamente y
            almacenados en el disco duro del equipo de cómputo del usuario al
            navegar en una página de Internet específica, que permiten recordar
            al servidor de Internet algunos datos sobre este usuario, respecto a
            sus preferencias para la visualización de las páginas en ese
            servidor (i.e. tipo de navegador utilizado, páginas visitadas).
          </p>

          <p>
            Los web beacons son una imagen visible u oculta insertada dentro de
            un sitio web o correo electrónico, que se utiliza para monitorear el
            comportamiento del usuario en estos medios. A través de éstos se
            puede obtener la siguiente información: la dirección IP de origen,
            navegador utilizado, sistema operativo, momento en que se accedió a
            la página, y en el caso del correo electrónico, la asociación de los
            datos anteriores con el destinatario.
          </p>

          <p>
            La finalidad de los datos personales recabados por medio de esta
            tecnología, será únicamente para fines estadísticos y para mejor
            rendimiento y funcionamiento de la página web.
          </p>

          <p>
            Tanto las cookies como los web beacons pueden ser deshabilitados por
            el usuario si así lo desea. Para conocer cómo hacerlo, consulte el
            siguiente enlace:{" "}
            <a href="http://support.microsoft.com/gp/cookies/es-es">
              http://support.microsoft.com/gp/cookies/es-es
            </a>
            .
          </p>

          <h2>Cambios de aviso de privacidad</h2>
          <p>
            El presente aviso de privacidad puede sufrir modificaciones, cambios
            o actualizaciones derivadas de nuevos requerimientos legales, de
            nuestras propias necesidades por los productos o servicios que
            ofrecemos; de nuestras prácticas de privacidad o de cambios en
            nuestro modelo de negocio.
          </p>

          <p>
            Nos comprometemos a mantenerlo informado sobre los cambios que pueda
            sufrir el presente aviso de privacidad, a través de nuestra página
            web <a href="https://www.tycoon.mx">www.tycoon.mx</a> o vía
            telefónica al momento de comunicarse con nosotros al{" "}
            <a href="tel:5553957833">5553957833</a>.
          </p>
        </>
      ) : (
        <>
          <h2>Mecanismo para conocer el aviso de privacidad integral</h2>
          <p>
            Para conocer más información sobre los términos y condiciones en que
            serán tratados sus datos personales y la forma en que podrá ejercer
            sus derechos ARCO (Acceso, Rectificación, Cancelación y Oposición),
            puede consultar el aviso de privacidad integral en la página web{" "}
            <a href="www.tycoon.mx">www.tycoon.mx</a> en la parte inferior,
            ingresando en el vínculo “aviso de privacidad”
          </p>

          <h2>
            Uso de cookies (aplica únicamente para usuarios de la página web)
          </h2>
          <p>
            Le informamos que en nuestra página de Internet utilizamos cookies y
            web beacons a través de las cuales es posible monitorear su
            comportamiento como usuario de Internet para obtener su dirección
            IP, horario de navegación, tiempo de navegación en nuestra página de
            Internet, secciones consultadas, y páginas de Internet accedidas
            previo a la nuestra, así como brindarle un mejor servicio y
            experiencia de usuario al navegar en nuestra página.
          </p>

          <p>
            Las cookies son archivos de texto descargados automáticamente y
            almacenados en el disco duro del equipo de cómputo del usuario al
            navegar en una página de Internet específica, que permiten al
            servidor de Internet recordar algunos datos sobre el usuario,
            relativos a sus preferencias para la visualización de las páginas en
            ese servidor (i.e. tipo de navegador utilizado, páginas visitadas).
          </p>

          <p>
            Los web beacons son una imagen visible u oculta insertada dentro de
            un sitio web o correo electrónico, que se utiliza para monitorear el
            comportamiento del usuario en estos medios. A través de éstos se
            puede obtener la siguiente información: la dirección IP de origen,
            navegador utilizado, sistema operativo, momento en que se accedió a
            la página, y en el caso del correo electrónico, la asociación de los
            datos anteriores con el destinatario.
          </p>

          <p>
            La finalidad de los datos personales recabados por medio de esta
            tecnología, será únicamente para fines estadísticos y para mejor
            rendimiento y funcionamiento de la página web.
          </p>

          <p>
            Tanto las cookies como los web beacons pueden ser deshabilitados por
            el usuario si así lo desea. Para conocer cómo hacerlo, consulte el
            siguiente enlace:{" "}
            <a href="http://support.microsoft.com/gp/cookies/es-es">
              http://support.microsoft.com/gp/cookies/es-es
            </a>
            .
          </p>
        </>
      )}

      <p>Última fecha de modificación:13 de junio de 2022</p>
    </section>
  );
};

export default AvisoPrivacidad;
