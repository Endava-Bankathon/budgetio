call cd figo
call mvn install:install-file -Dfile=sdk-1.2.jar -DgroupId=me.figo -DartifactId=sdk -Dversion=1.2 -Dpackaging=jar
call cd ../gini
call mvn install:install-file -Dfile=ginisdk-1.0.jar -DgroupId=net.gini.android -DartifactId=ginisdk -Dversion=1.0 -Dpackaging=jar