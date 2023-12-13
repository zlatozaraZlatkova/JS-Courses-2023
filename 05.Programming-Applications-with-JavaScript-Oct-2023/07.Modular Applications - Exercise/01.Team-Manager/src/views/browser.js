import { html } from "../../node_modules/lit-html/lit-html.js";

import { until } from "../../node_modules/lit-html/directives/until.js";

import { getTeams } from "../api/data.js";
import { teamTemplate } from "../utils.js/team.js";
import { loaderTemplate } from "../utils.js/loader.js";

const browseTemplate = (teams) => html` <section id="browse">
  <article class="pad-med">
    <h1>Team Browser</h1>
  </article>
  <article class="layout narrow">
    <div class="pad-small">
      <a href="/create" class="action cta">Create Team</a>
    </div>
  </article>
  ${teams.map(teamTemplate)}
</section>`;

export async function browsePage(ctx) {
  //until ==> loader

  ctx.render(until(populateTemplate(), loaderTemplate()));
}

async function populateTemplate() {
  const teams = await getTeams();
  return browseTemplate(teams);
}
