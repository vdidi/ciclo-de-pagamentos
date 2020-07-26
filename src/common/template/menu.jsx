import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => ( 
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashaboard' icon='dashboard' />
    <MenuTree label='Cadastro' icon='edit'>
      <MenuItem path='#billingCycles' 
        label='Cliclos de Pagamento' icon='usd' />
    </MenuTree>
  </ul>
)