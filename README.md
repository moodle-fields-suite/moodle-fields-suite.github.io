# moodle-fields-suite.github.io

Portal da organização **Moodle Fields Suite** no GitHub: <https://moodle-fields-suite.github.io>.

A **Moodle Fields Suite** reúne plugins comunitários (não oficiais) de campos para o **Moodle**: tipos de campo de perfil e de campo personalizado, e áreas de campos personalizados onde o Moodle não tem nenhuma.

## Plugins
- [`profilefield_json`](https://github.com/moodle-fields-suite/profilefield_json): campo de perfil JSON com editor visual. [Documentação](https://moodle-fields-suite.github.io/profilefield_json/).
- [`customfield_json`](https://github.com/moodle-fields-suite/customfield_json): campo personalizado JSON. [Documentação](https://moodle-fields-suite.github.io/customfield_json/).
- [`tool_categorycustomfields`](https://github.com/moodle-fields-suite/tool_categorycustomfields): campos personalizados para categorias de curso. [Documentação](https://moodle-fields-suite.github.io/tool_categorycustomfields/).

## Como atualizar
As páginas `pt-br/index.html`, `en/index.html` e `index.html` são geradas por `docs/tools/build_portal.py`, no repositório `workspace` (privado): edite o gerador e rode `python docs/tools/build_portal.py <pasta deste repositório>`. O workflow `pages.yml` publica a `main`.
