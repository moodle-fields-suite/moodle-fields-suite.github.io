# moodle-fields-suite.github.io

Portal da organização **Moodle Fields Suite** no GitHub: <https://moodle-fields-suite.github.io>.

A **Moodle Fields Suite** reúne plugins comunitários (não oficiais) de campos para o **Moodle**: tipos de campo de perfil e de campo personalizado, e áreas de campos personalizados onde o Moodle não tem nenhuma.

## Plugins
- [`profilefield_json`](https://github.com/moodle-fields-suite/profilefield_json): campo de perfil JSON com editor visual. [Documentação](https://moodle-fields-suite.github.io/profilefield_json/).
- [`customfield_json`](https://github.com/moodle-fields-suite/customfield_json): campo personalizado JSON. [Documentação](https://moodle-fields-suite.github.io/customfield_json/).
- [`tool_categorycustomfields`](https://github.com/moodle-fields-suite/tool_categorycustomfields): campos personalizados para categorias de curso. [Documentação](https://moodle-fields-suite.github.io/tool_categorycustomfields/).
- [`tool_competencycustomfields`](https://github.com/moodle-fields-suite/tool_competencycustomfields): campos personalizados para competências e quadros de competências. [Documentação](https://moodle-fields-suite.github.io/tool_competencycustomfields/).
- [`tool_learningplancustomfields`](https://github.com/moodle-fields-suite/tool_learningplancustomfields): campos personalizados para modelos e planos de aprendizagem. [Documentação](https://moodle-fields-suite.github.io/tool_learningplancustomfields/).
- [`tool_badgecustomfields`](https://github.com/moodle-fields-suite/tool_badgecustomfields): campos personalizados para emblemas. [Documentação](https://moodle-fields-suite.github.io/tool_badgecustomfields/).
- [`local_fieldssuite`](https://github.com/moodle-fields-suite/local_fieldssuite): plugin comum das áreas de campos personalizados. [Documentação](https://moodle-fields-suite.github.io/local_fieldssuite/).

## Como atualizar
As páginas `pt-br/index.html`, `en/index.html` e `index.html` são geradas por `docs/tools/build_portal.py`, no repositório `workspace` (privado): edite o gerador e rode `python docs/tools/build_portal.py <pasta deste repositório>`. O workflow `pages.yml` publica a `main`.
