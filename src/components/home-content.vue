<template>
	<div class="home-content" id="home-content">
		<div class="perfil">
			<div class="imagen-perfil">
				<img src="@/assets/3x/imagen_perfil.png" alt="lmv">
			</div>
			<div class="titulo-perfil">
				<h1>Perfil</h1>
			</div>
		</div>
		<p>
			Programador
			<strong>Full Stack web</strong> y
			<strong>DevOp</strong> con amplia experiencia en instalación e implementación de redes convergentes. He diseñado, instalado y administrado redes con equipos de ruteo, switcheo, servidores (linux), conmutadores IP. He participado y liderado el levantamiento de necesidades de cliente, el diseño y arquitectura de aplicaciones. Desarrollado de aplicaciones, sitios y páginas web en lenguajes de programación orientada a objetos (
			<strong>PHP, Python, C#</strong>) utilizando frameworks como
			<strong>Laravel y Codeigniter (PHP)</strong> para backend y he experimentado con frameworks de javascript como
			<strong>VUE y Angular</strong>.
			Manejo de bases de datos con lenguaje de consulta estructurado (SQL) como
			<strong>MySQL, MSSQL y Postgress</strong>. Manejo de distintos entornos de desarrollo (Visual Studio Code, PHP Storm, dreamweaver, eclipse, MS Visual Studio).
			Conocimiento de CMS en PHP como
			<strong>Drupal y Wordpress</strong>. Dominio del idioma
			<strong>inglés (90%)</strong>. Experiencia en trabajo en equipo como project leader (lado del cliente), project manager, líder de desarrollo de aplicación, DevOp y diseñador y administrador de infraestructura en nube (
			<strong>AWS</strong>).
		</p>
		<div class="perfil">
			<div class="imagen-perfil">
				<img src="@/assets/3x/imagen_experiencia.png" alt="lmv">
			</div>
			<div class="titulo-perfil">
				<h1>Experiencia</h1>
			</div>
		</div>
		<Timeline :timeline-items="dataTimeline" :message-when-no-items="messageWhenNoItems"/>
	</div>
</template>
<style lang="scss" scoped>

@import "@/scss/home-content.scss";

</style>
<script>
import Timeline from "@/components/Timeline.vue";

export default {
	components: {
		Timeline
	},
	data: () => ({
		messageWhenNoItems: "There are not items",
		dataTimeline: [
			{
				from: new Date(2015, 7),
				title: "ktc, Digital Now, S.C.",
				description:
					"DevOp y programación full stack. Participe en el equipo de desarrollo e implementación de sitios para cuentas como Suzuki Motors México, Acros y Whirlpool, Merz (Ultherapy) y la Escuela de Negocios del Instituto Tecnológico de Monterrey (EGADE Business School ). Participé en el diseño, implementación yadministración de los recursos de infraestructura de nube utilizando AWS. Deploy y mantenimiento del sitio de Whirlpool. Encargado de la administración y mantenimiento de los servidores en nube (Debian, la mayor parte) donde se alojaban las páginas de algunos de nuestros clientes. Responsable del repositorio de código de la empresa (GITLAB) y del despliegue de las nuevas versiones de las aplicaciones y sitios."
			},
			{
				from: new Date(2007, 1),
				title: "Profesional Independiente",
				description:
					'<div style:"padding-left:20px">Desarrollo de páginas y aplicaciones stand alone con tecnología web<br /><br /><span style="font-weight:500; font-size:2.25vw;">Impresora Eclipse S.A. de C.V. (Imprenta)</span> Consultor externo. Instalación de servidor LINUX para el manejo de aplicaciones INTRANET WEB. Instalación y diseño de la red de telefonía IP (en conjunto con RIVBEL, S.A. de C.V.) con un conmutador ELASTIX. Asesoría al cliente en la implementación del ERP Intelisis. Migración de datos de aplicaciones anteriores al ERP. Desarrollo de aplicaciones WEB internas para la administración de producción y de cotizaciones.<br /><br /><span style="font-weight:500; font-size:2.25vw;">Offset Imprenta S.A. de C.V. (Empaques de cartón)</span>Consultor externo. Desarrollo e implementación de un sistema de administración de mantenimiento correctivo y preventivo (PHP-MySQL). Instalación de servidor LINUX para almacenamiento de archivos y manejo de aplicaciones INTRANET. Asesoría y migración de datos de aplicaciones diseñadas en DBASE, CLIPPER y VISUAL FOX hacia el nuevo ERP (OpenERP, ahora ODOO – ERP programado en python).<br/><br/><span style="font-weight:500; font-size:2.25vw;">IMDOSOC (INSTITUTO MEXICANO DE DOCTRINA SOCIAL CRISTIANA)</span><br />Desarrollo e implementación del sistema control escolar. Desarrollado en PHP-MySQL con plugins de jquery.<br /><br/><span style="font-weight:500; font-size:2.25vw;">EWS-México, S.A. de C.V. (EMPRESA REPRESENTANTE DE KNOLL EN MÉXICO)</span>Consultor externo. Implementación e instalación de red LAN (cableado estructurado CAT6 y equipos activos), especificación e instalación de equipos de computo. Instalación de sistema de ventas 20-20 en combinación con AUTOCAD para el diseño, cotización y venta de espacios de oficina. Instalación de servidor LINUX para almacenamiento de archivos, control de acceso a VPN, correo interno.<br/><br/><span style="font-weight:500; font-size:2.25vw;">Klok, Creatividad y Diseño S.C.</span><br /> En colaboración con KLOK, desarrollo de la aplicación para el manejo de las actividades, administración de espacios y de eventos para la Parroquia Santa Cruz de Pedregal. Incluyó la instalación de un servidor DELL con sistema operativo UBUNTU LINUX 10.4 LTS Server como servidor WEB para la aplicación. Instalación y configuración del motor de base de datos MySQL, servidor VPN y correo interno. Desarrollo de sitios WEB para clientes de KLOK en PHP, Javascript y MySQL.<br/><br/><span style="font-weight:500; font-size:2.25vw;">Farpa, S.A. de C.V. (FRANQUICIATARIO DE FARMACIAS DE SIMILARES)</span> Consultor externo. Armado, instalación y configuración de servidor LINUX para almacenamiento compartido de archivos (SAMBA), instalación de servidor HTTP, correo interno (IMAP y SMTP), acceso remoto vía VPN, instalación y configuración del motor de base de datos MySQL. Desarrollo de interfaz para importar diariamente (CRON en LINUX) la información de ventas, inventarios y pedidos de la aplicación propietaria de Farmacias de Similares desarrollada en FOXPRO y exportar la información a tablas de MySQL. Desarrollo de una aplicación de reporteo en PHP para el análisis de la información del sistema propietario de Farmacias de Similares.</div>'

			},
			{
				from: new Date(1998, 6),
				title: "DECSA (COMERCIALIZADORA PARA LAS INDUSTRIAS DE TELECOMUNICACIONES Y ELECTRÓNICA)",
				description:
					"Gerente de sistemas responsable final de la infraestructura de cómputo, red y comunicaciones de la empresa. En el 2005 la empresa compró un nuevo edificio, en el cual se instaló una nueva red convergente (voz y datos), junto con el proveedor de los equipos activos (router, switches, conmutador y teléfonos) colaboré y supervisé la instalación y configuración de los equipos. Encabecé el equipo encargado de la implementación de un sistema ERP para el manejo de la empresa. / Gerente soporte técnico a ventas, encargado del diseño e impartición de cursos de capacitación para el personal de ventas de la empresa. Enlace entre el cliente y los proveedores para la búsqueda de soluciones en herramientas y equipos. / Agente de ventas"
			},
			{
				from: new Date(1988, 1),
				title: "CELA (COMERCIALIZADORA PARA LAS INDUSTRIAS DE TELECOMUNICACIONES)",
				description:
					"Ventas y administración. Soporte técnico a ventas. Empresa representante de la marca DIAMOND de conectores de fibra óptica."
			}
		]
	})
};
</script>

