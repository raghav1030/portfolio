import { useApiData } from "@/app/ContextApi/apiDataContext";
import { useCommand } from "@/app/ContextApi/commandContext";

interface MappedEventData {
  type: string;
  repository: string;
  url: string;
  created_at: string;
}

export const renderContributions = () => {
  
  let contributions = useApiData()?.contributions

  contributions = contributions?.filter((contribution : any) => contribution.type === "IssueCommentEvent" ||
  contribution.type === "PullRequestEvent" ||
  contribution.type === "PushEvent" ||
  contribution.type === "IssuesEvent"
  )
    

  
  const renderLinkElement = (link: string, linkName: string) => {
    return `<a href=${link} target='__blank'>${linkName}</a>`;
  };

  const dateAndTimeFormatter = (dateTimeString: string) => {
    const date = dateTimeString.split("T")[0];
    const time = dateTimeString.split("T")[1].split("Z")[0];
    return `${date} at ${time}`;
  };

  function mapEventData(event: any): MappedEventData {
    return {
      type: event.type,
      repository: `<a href=https://github.com/${event?.repo?.name} target='__blank'>${event.repo.name}</a>`,
      url:
        event.type === "IssueCommentEvent"
          ? renderLinkElement(
              event?.payload?.issue?.html_url,
              event?.payload?.issue?.html_url
            )
          : event.type === "PullRequestEvent"
          ? renderLinkElement(
              event?.payload?.pull_request?.html_url,
              event?.payload?.pull_request?.html_url
            )
          : event.type === "PushEvent"
          ? renderLinkElement(
              event?.payload?.commits[0]?.url,
              event?.payload?.commits[0]?.url
            )
          : "",
      created_at: event.created_at,
    };
  }

  const contributionsString = (contributions as string[])
    .map((event, index) => {
      const mappedEvent = mapEventData(event);
      return (
        `${index + 1}.  Type: ${mappedEvent.type}
    Repository: ${mappedEvent.repository}
    URL: ${mappedEvent.url}
    Created At: ${dateAndTimeFormatter(mappedEvent?.created_at)}\n`
      );
    })
    .join("\n");

  return `
My Recent Open Source Contributions :

${contributionsString}

Last 30 Days Total Contributions: ${(contributions as string[]).length}`;
};
