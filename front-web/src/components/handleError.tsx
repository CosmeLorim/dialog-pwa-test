import React from 'react'
import { ApolloError } from '@apollo/client'

const HandleError = ({ error }: { error?: ApolloError }) => {
  if (error?.networkError) {
    return (
      <p>Você está desconectado, verique usa conexão</p>
    )
  }

  return (
    <div>
      <p>Algo de errado não está certo... Não foi possível carregar a página</p>
    </div>
  )
}

export default HandleError
