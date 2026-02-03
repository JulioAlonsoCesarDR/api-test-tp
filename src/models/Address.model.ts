import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
    tableName: 'addresses',
})

class Address extends Model {
    @Column({
        type: DataType.STRING(50)
    })
    declare ip: string

      @Column({
        type: DataType.STRING(50)
    })
    declare city: string

      @Column({
        type: DataType.STRING(50)
    })
    declare region: string

      @Column({
        type: DataType.STRING(50)  
    })
    declare country_name: string

      @Column({
        type: DataType.STRING(50)  
    })
    declare postal: string

      @Column({
        type: DataType.STRING(50)  
    })
    declare country_code: string

      @Column({
        type: DataType.FLOAT(10, 6)  
    })
    declare latitude: number

      @Column({
        type: DataType.FLOAT(10, 6  )  
    })
    declare longitude: number
}

export default Address
