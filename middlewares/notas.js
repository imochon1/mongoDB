//Reservacions modelo incluir aerolinea precio sin iva y con iva tipo de cambio, froma de pago y pago total y pago acumulado y pago completado(is_pago_completado default false hasta que se paga) tipo de pago
//fechas,destino,numero de adultos
//coleccion/catalogo divisas
//notificacion al admin cuando se realice un pago total o parcial hay servicios de notificacionescloud.

//mcrear tablas  por cada rol colaborador (id de empleado , horario,si esta activo,) y cliente
//añadir lugar de trabajo de cada empleado

//cliente nombre apeliido direccion edad correo reservaciones,viajes comprados clientes frecuentes

//modelo aerolinea
// id1 ida num de avion num de vuelo num de asiento asientos disponibles fila hora de salida llegada al destino numero informacion de regreso distancia de vuelo AEROLINEA precio total
//1d2 vuelta  id1 num de avion num de vuelo num de asiento asientos disponibles fila hora de salida llegada al destino numero informacion de regreso AEROLINEA preecio total

//catalogo aerolineas con nombre

//buscar como asociar las tablas entre si.
//1terminar crud de todos los modelos en controller
//2manejo de tokens y definicion de los mismos a traves de rol a traves de middleware
//endpoint de login
//introducir generacion de jwt por login y regresar la info en el json (response)
//3definir privilegios de rol ya sea manual o con librerias tipo passport

//PAra referenciar con populate el string hace refrencia al key de el schema(key: value)

//ref refrencia al modelo de el esquema de mongo.

//pupulate denro de populate investigar
//terminar de completar crud (patch delete y soft)

//endpoint login verifica si usuario exsite y desencrupta el password y lo verifica
//se verifica el match con el password y accede a loggear

//si el login es exitoso se genera token co fecha de expiraciion de 10 minutos

//agregar vaiables de entorno al .env para deployent en heroku
