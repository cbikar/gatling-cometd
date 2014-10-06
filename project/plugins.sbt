logLevel := Level.Warn

resolvers += Resolver.url(
  "gatling-sbt-plugin-releases",
    url("http://dl.bintray.com/content/gatling/sbt-plugins"))(Resolver.ivyStylePatterns)

addSbtPlugin("io.gatling" % "sbt-plugin" % "1.0-RC5")

addSbtPlugin("org.xerial.sbt" % "sbt-sonatype" % "0.2.1")

addSbtPlugin("com.typesafe.sbt" % "sbt-pgp" % "0.8.3")

addSbtPlugin("com.github.gseitz" % "sbt-release" % "0.8.5")
