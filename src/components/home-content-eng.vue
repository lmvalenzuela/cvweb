<template>
	<div class="home-content" id="home-content">
		<div class="perfil">
			<div class="imagen-perfil">
				<img src="@/assets/3x/imagen_perfil.png" alt="lmv">
			</div>
			<div class="titulo-perfil">
				<h1>Profile</h1>
			</div>
		</div>
		<p>
			<strong>Web Full Stack</strong> programmer and DevOp.
			As backend, I have a long expirience programming in <strong>PHP</strong>, and medium skills with other languages such as <strong>Python</strong> and <strong>C#</strong>.<br/>
			Develop and maintenance of sites made with <strong>Laravel, Drupal and Wordpress</strong>. I've developed API services in Laravel using <strong>OAUTH</strong>.
			Also have a very good knowledge of <strong>SQL</strong> (<strong>MySQL, MSSQL</strong> and <strong>Postgress</strong>).
			In front end development I've worked with <strong>HTML5, CSS3, Flex, Angular 2, JQuery</strong> and vanilla <strong>javascript</strong> being <strong>Vue</strong> my preffered JS framework.
			In the field of <strong>DevOps</strong> I've worked with Linux systems (<strong>Debian, Ubuntu & Centos), NGINX, AWS</strong> and other cloud services (<strong>Google Apis)</strong>, mailing apis (<strong>MailGun</strong> and <strong>Mandril</strong> -By Mailchimp).<br /> I've also installed <strong>Gitlab</strong>'s version control, <strong>SAMBA, SMTP and VPN</strong>  servers.
			In Networking, I've managed and installed <strong>VoIP</strong> systems and networks using <strong>Elastix</strong>, routers and layer 3 switches.
		</p>
		<div class="perfil">
			<div class="imagen-perfil">
				<img src="@/assets/3x/imagen_experiencia.png" alt="lmv">
			</div>
			<div class="titulo-perfil">
				<h1>Jobs and projects</h1>
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
					"DevOp, full stack programmer & IT admin. I was part of the team that developed and deployed several sites and projects for different customers such as Suzuki Motors México, Acros & Whirlpool, Merz (Ultherapy) and EGADE Business School(ITESM's bussiness school). As DevOP, I was part of the team that developed and deploy the cloud's resources using AWS for Whirlpool's site. Also, was the admin for all the servers for ktc's hosting and develop and staging servers. Also was the admin of ktc's Gitlab server, GSuite services and other tools as Slack, 10kFt and Asana. Usually was the one in charged of deploying to production servers."
			},
			{
				from: new Date(2007, 1),
				title: "Freelance programmer  band IT consultant",
				description:
					'<div style:"padding-left:20px">Developed many landings, pages and sites using different frameworks and technologies (Codeigniter, PHP, C#)<br /><br /><span style="font-weight:500; font-size:2.25vw;">Impresora Eclipse S.A. de C.V. (Imprenta)</span> External Consultant. Installation of a physical server for file storage and intranet applications. Design and installation of (in colaboration with Rivel S.A. de C.V.) the LAN with VoIP Elastix Server. Advisory in the implementation of Intelisis ERP. Data migration from separete applications (payroll, production management, purchases and sales) to the ERP. Development of Web apps for needs not covered by the ERP.<br /><br /><span style="font-weight:500; font-size:2.25vw;">Offset Imprenta S.A. de C.V. (Empaques de cartón)</span>Consultor externo. Development and deployment of a Web (PHP based) for production maintenance. Installation of a LINUX (Ubuntu) server for file and app storage. Data migration from older systems (DBASE & Visual Fox) to more modern (Phyton and postgress) ERP system (ODOO)<br/><br/><span style="font-weight:500; font-size:2.25vw;">IMDOSOC (INSTITUTO MEXICANO DE DOCTRINA SOCIAL CRISTIANA)</span><br />Design, development and deployment of the school management system (PHP & MySQL).<br /><br/><span style="font-weight:500; font-size:2.25vw;">EWS-México, S.A. de C.V. (Office furniture)</span>External advisor. LAN design and deploy (CAT6 cabling system, router & switches).<br/><br/><span style="font-weight:500; font-size:2.25vw;">Klok, Creatividad y Diseño S.C.</span><br /> Join venture. Design, development and deployment in a physical DELL server of a management system (PHP, MySQL and javascript) for the resources, assets and activities for the Santa Cruz del Pedregal parrish.<br/><br/><span style="font-weight:500; font-size:2.25vw;">Farpa, S.A. de C.V. (FARMACIAS DE SIMILARES franchises holder)</span> External advisor. Installation of a physical server for internal mail (SMTP and IMAP servers), along with a VPN network (routers in franchises and a VPN router at the head office). Design, development and deployment of management and report apps (sales, expenses, assistance control) with PHP and MySQL. Data import from sales system (FOXPRO).</div>'

			},
			{
				from: new Date(1998, 6),
				title: "DECSA (Telecom and electronics supplier)",
				description:
					"Started as sales agent, then became tech support for the sale force. Finished as IT Manager. During the 9 years of work, helped the company to change their offices, designed the new LAN with VoIP (3Com). Managed the VPN network to connect 3 different locations to the physical servers. Started the implementation of an ERP (OpenExpertya)"
			},
			{
				from: new Date(1988, 1),
				title: "CELA (COMERCIALIZADORA PARA LAS INDUSTRIAS DE TELECOMUNICACIONES)",
				description:
					"Sales and admin assistant. CELA was the representative sales company for DIAMOND LTD (Switzerland) manufacturer of fiber optic connectors. Helped DIAMOND LTD customers in México to find the better solutions for their fiber optic connecting needs. Trained technitians in the use of DIAMOND's connectors technology."
			}
		]
	})
};
</script>

