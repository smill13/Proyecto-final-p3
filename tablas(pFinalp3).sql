Use p3_final;
GO

Create table Clientes 
( ClienteID int IDENTITY(1,1) PRIMARY KEY,
  Nombre nvarchar (50),
  Gmail nvarchar (MAX),
  Contraseña nvarchar (MAX) 
);
GO

CREATE TABLE Hoteles (
    HotelID int IDENTITY(1,1) PRIMARY KEY,
    Nombre nvarchar(100) NOT NULL,
    Direccion nvarchar(255) NOT NULL,
    Ciudad nvarchar(50),
    Pais nvarchar(50),
    Telefono nvarchar(20),
    Estacionamiento nvarchar(10)
);
GO

CREATE TABLE Reservas (
    ReservaID int IDENTITY(1,1) PRIMARY KEY,
    ClienteID int, -- Puede ser una clave foránea que hace referencia a la tabla de clientes
    HotelID int,   -- Puede ser una clave foránea que hace referencia a la tabla de hoteles
    FechaInicio date NOT NULL,
    FechaFin date NOT NULL,
    NumeroHabitaciones int,
    PrecioTotal decimal(10, 2),
    Estado nvarchar(50) CHECK (Estado IN ('Pendiente', 'Confirmada', 'Cancelada')), -- Ejemplo de restricción CHECK
    CONSTRAINT FK_ClienteID FOREIGN KEY (ClienteID) REFERENCES Clientes (ClienteID),
    CONSTRAINT FK_HotelID FOREIGN KEY (HotelID) REFERENCES Hoteles (HotelID)
);
GO

