# Mocks, Stubs, and Spies in JavaScript

Este repositório é parte do meu estudo sobre mocks, stubs e spies em JavaScript. Neste projeto, explorei diferentes técnicas para testar código JavaScript, especialmente em casos onde precisamos isolar partes do código para testes unitários.

## Motivação

A motivação por trás deste projeto é entender como podemos testar nosso código de forma eficiente, isolando diferentes partes e comportamentos, sem depender de recursos externos. Para isso, explorei o uso de mocks, stubs e spies em diferentes cenários.

## Conteúdo

1. **Mocks**: Implementei mocks manualmente em JavaScript puro, sem depender de bibliotecas externas. Estes mocks foram utilizados para testar um processo de conversão de arquivos CSV para JSON, verificando se as propriedades desejadas são corretamente extraídas.

2. **Stubs**: Utilizei stubs para evitar a dependência de uma API externa na internet durante os testes. Isso garante que os testes não serão afetados por problemas de conectividade ou mudanças na API externa.

3. **Spies**: Explorei o uso de spies para observar chamadas e outras propriedades de um algoritmo que gera uma sequência de Fibonacci com recursão. Os spies permitem verificar se as funções estão sendo chamadas corretamente e com os parâmetros esperados.

## Aviso

É importante notar que os testes neste repositório foram realizados sem seguir estritamente o Test-Driven Development (TDD) ou as melhores práticas de teste. Eles foram criados com o objetivo de iniciar o aprendizado e prática de testes unitários, explorando conceitos como mocks, stubs e spies.

## Contribuição

Se você tiver sugestões de melhorias nos testes existentes, novos casos de teste para adicionar ou qualquer outra contribuição para melhorar este projeto, sinta-se à vontade para enviar um pull request. Todas as contribuições são bem-vindas!

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
