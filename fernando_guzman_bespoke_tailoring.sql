PGDMP                         {         !   Fernando_Guzman_Bespoke_Tailoring    15.1    15.1 V    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    437344 !   Fernando_Guzman_Bespoke_Tailoring    DATABASE     �   CREATE DATABASE "Fernando_Guzman_Bespoke_Tailoring" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_United States.1252';
 3   DROP DATABASE "Fernando_Guzman_Bespoke_Tailoring";
                postgres    false            �            1255    437462 
   id_boton()    FUNCTION     �   CREATE FUNCTION public.id_boton() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_boton := (select coalesce(max(id_boton), 0) + 1 from boton);
	return New;
End;
$$;
 !   DROP FUNCTION public.id_boton();
       public          postgres    false            �            1255    437468    id_cliente()    FUNCTION     �   CREATE FUNCTION public.id_cliente() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_cliente := (select coalesce(max(id_cliente), 0) + 1 from cliente);
	return New;
End;
$$;
 #   DROP FUNCTION public.id_cliente();
       public          postgres    false            �            1255    437456    id_combinacion()    FUNCTION     �   CREATE FUNCTION public.id_combinacion() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_combinacion := (select coalesce(max(id_combinacion), 0) + 1 from combinacion);
	return New;
End;
$$;
 '   DROP FUNCTION public.id_combinacion();
       public          postgres    false            �            1255    437460    id_diseno()    FUNCTION     �   CREATE FUNCTION public.id_diseno() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_diseno := (select coalesce(max(id_diseno), 0) + 1 from diseno);
	return New;
End;
$$;
 "   DROP FUNCTION public.id_diseno();
       public          postgres    false            �            1255    437466    id_factura()    FUNCTION     �   CREATE FUNCTION public.id_factura() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_factura := (select coalesce(max(id_factura), 0) + 1 from factura);
	return New;
End;
$$;
 #   DROP FUNCTION public.id_factura();
       public          postgres    false            �            1255    437464 	   id_hilo()    FUNCTION     �   CREATE FUNCTION public.id_hilo() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_hilo := (select coalesce(max(id_hilo), 0) + 1 from hilo);
	return New;
End;
$$;
     DROP FUNCTION public.id_hilo();
       public          postgres    false            �            1255    437471    id_medida()    FUNCTION     �   CREATE FUNCTION public.id_medida() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_medida := (select coalesce(max(id_medida), 0) + 1 from tipo_medida);
	return New;
End;
$$;
 "   DROP FUNCTION public.id_medida();
       public          postgres    false            �            1255    437458    id_pedido()    FUNCTION     �   CREATE FUNCTION public.id_pedido() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_pedido := (select coalesce(max(id_pedido), 0) + 1 from pedido);
	return New;
End;
$$;
 "   DROP FUNCTION public.id_pedido();
       public          postgres    false            �            1255    437454 	   id_tela()    FUNCTION     �   CREATE FUNCTION public.id_tela() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.id_tela := (select coalesce(max(id_tela), 0) + 1 from tela);
	return New;
End;
$$;
     DROP FUNCTION public.id_tela();
       public          postgres    false            �            1255    437352 	   id_user()    FUNCTION     �   CREATE FUNCTION public.id_user() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
Begin
	New.Id_usuario := (select coalesce(max(Id_usuario), 0) + 1 from usuario);
	return New;
End;
$$;
     DROP FUNCTION public.id_user();
       public          postgres    false            �            1259    437424    boton    TABLE     �   CREATE TABLE public.boton (
    id_boton integer NOT NULL,
    color character varying(100),
    descripcion text,
    precio_unidad double precision,
    imagen text
);
    DROP TABLE public.boton;
       public         heap    postgres    false            �            1259    437438    boton_inventario    TABLE     t   CREATE TABLE public.boton_inventario (
    id_boton integer,
    cant_disponible integer,
    fecha_ingreso date
);
 $   DROP TABLE public.boton_inventario;
       public         heap    postgres    false            �            1259    437375    cliente    TABLE     x   CREATE TABLE public.cliente (
    id_cliente integer NOT NULL,
    nombre character varying(500),
    genero boolean
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    437412    combinacion    TABLE     �  CREATE TABLE public.combinacion (
    id_combinacion integer NOT NULL,
    id_tela_combinacion integer,
    id_hilo_boton integer,
    id_hilo_ojales integer,
    cuello boolean,
    collar_interno boolean,
    plaquet boolean,
    botonera boolean,
    bies_botonera boolean,
    orilla_plaquet boolean,
    puno_interno boolean,
    puno_externo boolean,
    trabillas_manga boolean,
    coderas boolean
);
    DROP TABLE public.combinacion;
       public         heap    postgres    false            �            1259    437402    detalle_factura    TABLE     �   CREATE TABLE public.detalle_factura (
    id_factura integer,
    id_pedido integer,
    id_tela integer,
    cant_tela double precision,
    subtotal double precision
);
 #   DROP TABLE public.detalle_factura;
       public         heap    postgres    false            �            1259    437417    diseno    TABLE     �   CREATE TABLE public.diseno (
    id_diseno integer NOT NULL,
    nombre_diseno character varying(500),
    estilo character varying(500),
    descripcion text,
    imagen text
);
    DROP TABLE public.diseno;
       public         heap    postgres    false            �            1259    437368    especialidad    TABLE     �   CREATE TABLE public.especialidad (
    id_especialidad integer NOT NULL,
    especialidad character varying(200),
    descripcion text
);
     DROP TABLE public.especialidad;
       public         heap    postgres    false            �            1259    437397    factura    TABLE     �   CREATE TABLE public.factura (
    id_factura integer NOT NULL,
    nit character varying(20),
    id_cliente integer,
    total double precision
);
    DROP TABLE public.factura;
       public         heap    postgres    false            �            1259    437431    hilo    TABLE     �   CREATE TABLE public.hilo (
    id_hilo integer NOT NULL,
    color character varying(100),
    descripcion text,
    precio_unidad double precision,
    imagen text
);
    DROP TABLE public.hilo;
       public         heap    postgres    false            �            1259    437441    hilo_inventario    TABLE     r   CREATE TABLE public.hilo_inventario (
    id_hilo integer,
    cant_disponible integer,
    fecha_ingreso date
);
 #   DROP TABLE public.hilo_inventario;
       public         heap    postgres    false            �            1259    437483    medidas    TABLE     �   CREATE TABLE public.medidas (
    id_cliente integer,
    id_medida integer,
    medida double precision,
    fecha_medicion date
);
    DROP TABLE public.medidas;
       public         heap    postgres    false            �            1259    437390    nit    TABLE     {   CREATE TABLE public.nit (
    nit character varying(20) NOT NULL,
    nombre character varying(200),
    direccion text
);
    DROP TABLE public.nit;
       public         heap    postgres    false            �            1259    437405    pedido    TABLE     �  CREATE TABLE public.pedido (
    id_pedido integer NOT NULL,
    id_cliente integer,
    id_diseno integer,
    fecha_pedido date,
    fecha_entrega date,
    id_tela_cuerpo integer,
    id_hilo_cuerpo integer,
    id_boton integer,
    iniciales boolean,
    entretela character varying(100),
    cuello character varying(100),
    boton_cuello boolean,
    boton_lateral boolean,
    puno character varying(100),
    costura_pluma boolean,
    plaquet boolean,
    id_combinacion integer,
    notas text
);
    DROP TABLE public.pedido;
       public         heap    postgres    false            �            1259    437444    tela    TABLE     �   CREATE TABLE public.tela (
    id_tela integer NOT NULL,
    nombre_tela character varying(500),
    description text,
    precio_yarda double precision,
    procedencia text,
    imagen text
);
    DROP TABLE public.tela;
       public         heap    postgres    false            �            1259    437451    tela_inventario    TABLE     {   CREATE TABLE public.tela_inventario (
    id_tela integer,
    cant_disponible double precision,
    fecha_ingreso date
);
 #   DROP TABLE public.tela_inventario;
       public         heap    postgres    false            �            1259    437385    tipo_medida    TABLE     l   CREATE TABLE public.tipo_medida (
    id_medida integer NOT NULL,
    tipo_medida character varying(100)
);
    DROP TABLE public.tipo_medida;
       public         heap    postgres    false            �            1259    437345    usuario    TABLE     
  CREATE TABLE public.usuario (
    id_usuario integer NOT NULL,
    nombre character varying(500),
    apellido character varying(500),
    correo text,
    contrasena text,
    tipo boolean,
    especialidad integer,
    fecha_nacimiento date,
    genero boolean
);
    DROP TABLE public.usuario;
       public         heap    postgres    false            x          0    437424    boton 
   TABLE DATA           T   COPY public.boton (id_boton, color, descripcion, precio_unidad, imagen) FROM stdin;
    public          postgres    false    224   �k       z          0    437438    boton_inventario 
   TABLE DATA           T   COPY public.boton_inventario (id_boton, cant_disponible, fecha_ingreso) FROM stdin;
    public          postgres    false    226   �k       p          0    437375    cliente 
   TABLE DATA           =   COPY public.cliente (id_cliente, nombre, genero) FROM stdin;
    public          postgres    false    216   �k       v          0    437412    combinacion 
   TABLE DATA           �   COPY public.combinacion (id_combinacion, id_tela_combinacion, id_hilo_boton, id_hilo_ojales, cuello, collar_interno, plaquet, botonera, bies_botonera, orilla_plaquet, puno_interno, puno_externo, trabillas_manga, coderas) FROM stdin;
    public          postgres    false    222   �k       t          0    437402    detalle_factura 
   TABLE DATA           ^   COPY public.detalle_factura (id_factura, id_pedido, id_tela, cant_tela, subtotal) FROM stdin;
    public          postgres    false    220   l       w          0    437417    diseno 
   TABLE DATA           W   COPY public.diseno (id_diseno, nombre_diseno, estilo, descripcion, imagen) FROM stdin;
    public          postgres    false    223   -l       o          0    437368    especialidad 
   TABLE DATA           R   COPY public.especialidad (id_especialidad, especialidad, descripcion) FROM stdin;
    public          postgres    false    215   Jl       s          0    437397    factura 
   TABLE DATA           E   COPY public.factura (id_factura, nit, id_cliente, total) FROM stdin;
    public          postgres    false    219   gl       y          0    437431    hilo 
   TABLE DATA           R   COPY public.hilo (id_hilo, color, descripcion, precio_unidad, imagen) FROM stdin;
    public          postgres    false    225   �l       {          0    437441    hilo_inventario 
   TABLE DATA           R   COPY public.hilo_inventario (id_hilo, cant_disponible, fecha_ingreso) FROM stdin;
    public          postgres    false    227   �l       ~          0    437483    medidas 
   TABLE DATA           P   COPY public.medidas (id_cliente, id_medida, medida, fecha_medicion) FROM stdin;
    public          postgres    false    230   �l       r          0    437390    nit 
   TABLE DATA           5   COPY public.nit (nit, nombre, direccion) FROM stdin;
    public          postgres    false    218   �l       u          0    437405    pedido 
   TABLE DATA           �   COPY public.pedido (id_pedido, id_cliente, id_diseno, fecha_pedido, fecha_entrega, id_tela_cuerpo, id_hilo_cuerpo, id_boton, iniciales, entretela, cuello, boton_cuello, boton_lateral, puno, costura_pluma, plaquet, id_combinacion, notas) FROM stdin;
    public          postgres    false    221   �l       |          0    437444    tela 
   TABLE DATA           d   COPY public.tela (id_tela, nombre_tela, description, precio_yarda, procedencia, imagen) FROM stdin;
    public          postgres    false    228   m       }          0    437451    tela_inventario 
   TABLE DATA           R   COPY public.tela_inventario (id_tela, cant_disponible, fecha_ingreso) FROM stdin;
    public          postgres    false    229   2m       q          0    437385    tipo_medida 
   TABLE DATA           =   COPY public.tipo_medida (id_medida, tipo_medida) FROM stdin;
    public          postgres    false    217   Om       n          0    437345    usuario 
   TABLE DATA           �   COPY public.usuario (id_usuario, nombre, apellido, correo, contrasena, tipo, especialidad, fecha_nacimiento, genero) FROM stdin;
    public          postgres    false    214   lm       �           2606    437430    boton boton_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.boton
    ADD CONSTRAINT boton_pkey PRIMARY KEY (id_boton);
 :   ALTER TABLE ONLY public.boton DROP CONSTRAINT boton_pkey;
       public            postgres    false    224            �           2606    437381    cliente cliente_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cliente);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    216            �           2606    437416    combinacion combinacion_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.combinacion
    ADD CONSTRAINT combinacion_pkey PRIMARY KEY (id_combinacion);
 F   ALTER TABLE ONLY public.combinacion DROP CONSTRAINT combinacion_pkey;
       public            postgres    false    222            �           2606    437423    diseno diseno_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.diseno
    ADD CONSTRAINT diseno_pkey PRIMARY KEY (id_diseno);
 <   ALTER TABLE ONLY public.diseno DROP CONSTRAINT diseno_pkey;
       public            postgres    false    223            �           2606    437374    especialidad especialidad_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.especialidad
    ADD CONSTRAINT especialidad_pkey PRIMARY KEY (id_especialidad);
 H   ALTER TABLE ONLY public.especialidad DROP CONSTRAINT especialidad_pkey;
       public            postgres    false    215            �           2606    437401    factura factura_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT factura_pkey PRIMARY KEY (id_factura);
 >   ALTER TABLE ONLY public.factura DROP CONSTRAINT factura_pkey;
       public            postgres    false    219            �           2606    437437    hilo hilo_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.hilo
    ADD CONSTRAINT hilo_pkey PRIMARY KEY (id_hilo);
 8   ALTER TABLE ONLY public.hilo DROP CONSTRAINT hilo_pkey;
       public            postgres    false    225            �           2606    437396    nit nit_pkey 
   CONSTRAINT     K   ALTER TABLE ONLY public.nit
    ADD CONSTRAINT nit_pkey PRIMARY KEY (nit);
 6   ALTER TABLE ONLY public.nit DROP CONSTRAINT nit_pkey;
       public            postgres    false    218            �           2606    437411    pedido pedido_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_pkey PRIMARY KEY (id_pedido);
 <   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_pkey;
       public            postgres    false    221            �           2606    437450    tela tela_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.tela
    ADD CONSTRAINT tela_pkey PRIMARY KEY (id_tela);
 8   ALTER TABLE ONLY public.tela DROP CONSTRAINT tela_pkey;
       public            postgres    false    228            �           2606    437389    tipo_medida tipo_medida_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.tipo_medida
    ADD CONSTRAINT tipo_medida_pkey PRIMARY KEY (id_medida);
 F   ALTER TABLE ONLY public.tipo_medida DROP CONSTRAINT tipo_medida_pkey;
       public            postgres    false    217            �           2606    437351    usuario usuario_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT usuario_pkey PRIMARY KEY (id_usuario);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT usuario_pkey;
       public            postgres    false    214            �           2620    437463    boton pre_insert_id_boton    TRIGGER     r   CREATE TRIGGER pre_insert_id_boton BEFORE INSERT ON public.boton FOR EACH ROW EXECUTE FUNCTION public.id_boton();
 2   DROP TRIGGER pre_insert_id_boton ON public.boton;
       public          postgres    false    236    224            �           2620    437469    cliente pre_insert_id_cliente    TRIGGER     x   CREATE TRIGGER pre_insert_id_cliente BEFORE INSERT ON public.cliente FOR EACH ROW EXECUTE FUNCTION public.id_cliente();
 6   DROP TRIGGER pre_insert_id_cliente ON public.cliente;
       public          postgres    false    216    239            �           2620    437457 %   combinacion pre_insert_id_combinacion    TRIGGER     �   CREATE TRIGGER pre_insert_id_combinacion BEFORE INSERT ON public.combinacion FOR EACH ROW EXECUTE FUNCTION public.id_combinacion();
 >   DROP TRIGGER pre_insert_id_combinacion ON public.combinacion;
       public          postgres    false    222    233            �           2620    437461    diseno pre_insert_id_diseno    TRIGGER     u   CREATE TRIGGER pre_insert_id_diseno BEFORE INSERT ON public.diseno FOR EACH ROW EXECUTE FUNCTION public.id_diseno();
 4   DROP TRIGGER pre_insert_id_diseno ON public.diseno;
       public          postgres    false    235    223            �           2620    437467    factura pre_insert_id_factura    TRIGGER     x   CREATE TRIGGER pre_insert_id_factura BEFORE INSERT ON public.factura FOR EACH ROW EXECUTE FUNCTION public.id_factura();
 6   DROP TRIGGER pre_insert_id_factura ON public.factura;
       public          postgres    false    219    238            �           2620    437465    hilo pre_insert_id_hilo    TRIGGER     o   CREATE TRIGGER pre_insert_id_hilo BEFORE INSERT ON public.hilo FOR EACH ROW EXECUTE FUNCTION public.id_hilo();
 0   DROP TRIGGER pre_insert_id_hilo ON public.hilo;
       public          postgres    false    237    225            �           2620    437472     tipo_medida pre_insert_id_medida    TRIGGER     z   CREATE TRIGGER pre_insert_id_medida BEFORE INSERT ON public.tipo_medida FOR EACH ROW EXECUTE FUNCTION public.id_medida();
 9   DROP TRIGGER pre_insert_id_medida ON public.tipo_medida;
       public          postgres    false    217    240            �           2620    437459    pedido pre_insert_id_pedido    TRIGGER     u   CREATE TRIGGER pre_insert_id_pedido BEFORE INSERT ON public.pedido FOR EACH ROW EXECUTE FUNCTION public.id_pedido();
 4   DROP TRIGGER pre_insert_id_pedido ON public.pedido;
       public          postgres    false    221    234            �           2620    437455    tela pre_insert_id_tela    TRIGGER     o   CREATE TRIGGER pre_insert_id_tela BEFORE INSERT ON public.tela FOR EACH ROW EXECUTE FUNCTION public.id_tela();
 0   DROP TRIGGER pre_insert_id_tela ON public.tela;
       public          postgres    false    232    228            �           2620    437353    usuario pre_insert_id_usuario    TRIGGER     u   CREATE TRIGGER pre_insert_id_usuario BEFORE INSERT ON public.usuario FOR EACH ROW EXECUTE FUNCTION public.id_user();
 6   DROP TRIGGER pre_insert_id_usuario ON public.usuario;
       public          postgres    false    214    231            �           2606    437516    pedido combinacion    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT combinacion FOREIGN KEY (id_combinacion) REFERENCES public.combinacion(id_combinacion);
 <   ALTER TABLE ONLY public.pedido DROP CONSTRAINT combinacion;
       public          postgres    false    222    3261    221            �           2606    437501    detalle_factura detalle_factura    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_factura
    ADD CONSTRAINT detalle_factura FOREIGN KEY (id_factura) REFERENCES public.factura(id_factura);
 I   ALTER TABLE ONLY public.detalle_factura DROP CONSTRAINT detalle_factura;
       public          postgres    false    220    3257    219            �           2606    437511    pedido disenos    FK CONSTRAINT     w   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT disenos FOREIGN KEY (id_diseno) REFERENCES public.diseno(id_diseno);
 8   ALTER TABLE ONLY public.pedido DROP CONSTRAINT disenos;
       public          postgres    false    221    3263    223            �           2606    437478    usuario especialidad    FK CONSTRAINT     �   ALTER TABLE ONLY public.usuario
    ADD CONSTRAINT especialidad FOREIGN KEY (especialidad) REFERENCES public.especialidad(id_especialidad);
 >   ALTER TABLE ONLY public.usuario DROP CONSTRAINT especialidad;
       public          postgres    false    215    214    3249            �           2606    437521    boton_inventario inventario    FK CONSTRAINT     �   ALTER TABLE ONLY public.boton_inventario
    ADD CONSTRAINT inventario FOREIGN KEY (id_boton) REFERENCES public.boton(id_boton);
 E   ALTER TABLE ONLY public.boton_inventario DROP CONSTRAINT inventario;
       public          postgres    false    224    3265    226            �           2606    437531    hilo_inventario inventario    FK CONSTRAINT     }   ALTER TABLE ONLY public.hilo_inventario
    ADD CONSTRAINT inventario FOREIGN KEY (id_hilo) REFERENCES public.hilo(id_hilo);
 D   ALTER TABLE ONLY public.hilo_inventario DROP CONSTRAINT inventario;
       public          postgres    false    225    227    3267            �           2606    437541    tela_inventario inventario    FK CONSTRAINT     }   ALTER TABLE ONLY public.tela_inventario
    ADD CONSTRAINT inventario FOREIGN KEY (id_tela) REFERENCES public.tela(id_tela);
 D   ALTER TABLE ONLY public.tela_inventario DROP CONSTRAINT inventario;
       public          postgres    false    3269    229    228            �           2606    437486    medidas medida_cliente    FK CONSTRAINT     �   ALTER TABLE ONLY public.medidas
    ADD CONSTRAINT medida_cliente FOREIGN KEY (id_cliente) REFERENCES public.cliente(id_cliente);
 @   ALTER TABLE ONLY public.medidas DROP CONSTRAINT medida_cliente;
       public          postgres    false    216    3251    230            �           2606    437496    factura nit    FK CONSTRAINT     e   ALTER TABLE ONLY public.factura
    ADD CONSTRAINT nit FOREIGN KEY (nit) REFERENCES public.nit(nit);
 5   ALTER TABLE ONLY public.factura DROP CONSTRAINT nit;
       public          postgres    false    219    3255    218            �           2606    437506    detalle_factura pedidos    FK CONSTRAINT     �   ALTER TABLE ONLY public.detalle_factura
    ADD CONSTRAINT pedidos FOREIGN KEY (id_pedido) REFERENCES public.pedido(id_pedido);
 A   ALTER TABLE ONLY public.detalle_factura DROP CONSTRAINT pedidos;
       public          postgres    false    220    3259    221            �           2606    437491    medidas tipo_medida    FK CONSTRAINT     �   ALTER TABLE ONLY public.medidas
    ADD CONSTRAINT tipo_medida FOREIGN KEY (id_medida) REFERENCES public.tipo_medida(id_medida);
 =   ALTER TABLE ONLY public.medidas DROP CONSTRAINT tipo_medida;
       public          postgres    false    3253    230    217            �           2606    437526    pedido uso_boton    FK CONSTRAINT     v   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT uso_boton FOREIGN KEY (id_boton) REFERENCES public.boton(id_boton);
 :   ALTER TABLE ONLY public.pedido DROP CONSTRAINT uso_boton;
       public          postgres    false    3265    221    224            �           2606    437536    pedido uso_hilo    FK CONSTRAINT     y   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT uso_hilo FOREIGN KEY (id_hilo_cuerpo) REFERENCES public.hilo(id_hilo);
 9   ALTER TABLE ONLY public.pedido DROP CONSTRAINT uso_hilo;
       public          postgres    false    3267    221    225            �           2606    437551    combinacion uso_hilo_boton    FK CONSTRAINT     �   ALTER TABLE ONLY public.combinacion
    ADD CONSTRAINT uso_hilo_boton FOREIGN KEY (id_hilo_boton) REFERENCES public.hilo(id_hilo);
 D   ALTER TABLE ONLY public.combinacion DROP CONSTRAINT uso_hilo_boton;
       public          postgres    false    222    3267    225            �           2606    437556    combinacion uso_hilo_ojal    FK CONSTRAINT     �   ALTER TABLE ONLY public.combinacion
    ADD CONSTRAINT uso_hilo_ojal FOREIGN KEY (id_hilo_ojales) REFERENCES public.hilo(id_hilo);
 C   ALTER TABLE ONLY public.combinacion DROP CONSTRAINT uso_hilo_ojal;
       public          postgres    false    3267    225    222            �           2606    437546    pedido uso_tela    FK CONSTRAINT     y   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT uso_tela FOREIGN KEY (id_tela_cuerpo) REFERENCES public.tela(id_tela);
 9   ALTER TABLE ONLY public.pedido DROP CONSTRAINT uso_tela;
       public          postgres    false    221    3269    228            x      x������ � �      z      x������ � �      p      x������ � �      v      x������ � �      t      x������ � �      w      x������ � �      o      x������ � �      s      x������ � �      y      x������ � �      {      x������ � �      ~      x������ � �      r      x������ � �      u      x������ � �      |      x������ � �      }      x������ � �      q      x������ � �      n      x������ � �     