import React, { useState } from 'react'
import { AccordionItem } from '../atoms/AccordionItem'

export const Accordion = () => {
    var mockData = [
        {
            title: '¿Cómo ser un proveedor?',
            description: 'Texto de referencia, con muchas lineas.',
        },
        {
            title: 'Recepción de Facturas y Pagos',
            description: 'Texto de referencia, con muchas lineas.',
        },
        {
            title: 'Evaluación de Proveedores Actuales',
            description: 'Texto de referencia, con muchas lineas.',
        },
        {
            title: '¿Cómo ser un proveedor? 2',
            description: 'Texto de referencia, con muchas lineas.',
        },
        {
            title: 'Recepción de Facturas y Pagos 2',
            description: 'Texto de referencia, con muchas lineas.',
        },
        {
            title: 'Evaluación de Proveedores Actuales 2',
            description: 'Texto de referencia, con muchas lineas.',
        }
    ]
    // setAccordionList
    const [accordionList] = useState(mockData);

    return (
        <div>
            <div className="accordion accordion-flush" id="accordionExample">
                {
                    accordionList.map((item, index) => 
                        (<AccordionItem
                            key={item.title}
                            index={index}
                            title={item.title}
                            description={item.description}
                        />)
                    )
                }
            </div>
        </div>
    )
}
