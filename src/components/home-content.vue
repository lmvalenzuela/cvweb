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
				from: new Date(2018, 7),
				title: "Name",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
			},
			{
				from: new Date(2016, 1),
				title: "Name",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
			},
			{
				from: new Date(2016, 6),
				title: "Name",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
			},
			{
				from: new Date(2012, 1),
				title: "Name",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
			}
		]
	})
};
</script>

