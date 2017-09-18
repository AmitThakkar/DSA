import java.util.*;

/*
*
* Given a group of movies and their start time, assuming that are 1 hour long,
* Returns a movie schedule (no time conflict).
* enter:
* Movie ("Shining", [14, 15, 16])
* Movie ("kill bill", [14, 15])
* Movie ("Pulp fiction", [14, 15])
* */

public class ScheduleMovies {

    public static void main(String[] args) {
        ScheduleMovies scheduleMovies = new ScheduleMovies();

        HashMap<String, int[]> movieSchedules = new HashMap<>();

        movieSchedules.put("K3G", new int[]{10, 11, 12});
        movieSchedules.put("DDLJ", new int[]{9, 10});
        movieSchedules.put("HAHK", new int[]{10});
        movieSchedules.put("KKHH", new int[]{9, 10, 11});
        movieSchedules.put("LS", new int[]{11, 12, 13});

        System.out.println(scheduleMovies.getSchedule(movieSchedules));
    }

    public Map<String, Integer> getSchedule(HashMap<String, int[]> movieSchedules) {
        Map<String, Integer> movieSchedule = new HashMap<>();

        Map<String, Integer> movieOccurrence = new HashMap<>();
        Map<Integer, List<String>> movieTimings = new TreeMap<>();

        for (Map.Entry<String, int[]> entry : movieSchedules.entrySet()) {
            int[] schedule = entry.getValue();
            for (Integer timing : schedule) {
                if (!movieTimings.containsKey(timing)) {
                    movieTimings.put(timing, new ArrayList<>());
                }
                movieTimings.get(timing).add(entry.getKey());
            }
            movieOccurrence.put(entry.getKey(), entry.getValue().length);
        }

        for (Map.Entry<Integer, List<String>> entry : movieTimings.entrySet()) {
            List<String> movies = entry.getValue();

            String leastOccurrenceMovie = null;
            Integer occurrence = Integer.MAX_VALUE;

            for (String movie : movies) {
                if (movieOccurrence.get(movie) != null && movieOccurrence.get(movie) <= occurrence) {
                    leastOccurrenceMovie = movie;
                    occurrence = movieOccurrence.get(movie);
                }
                if (movieOccurrence.get(movie) != null) {
                    movieOccurrence.put(movie, movieOccurrence.get(movie) - 1);
                }
            }

            movieSchedule.put(leastOccurrenceMovie, entry.getKey());
            movieOccurrence.remove(leastOccurrenceMovie);

        }

        return movieSchedule;
    }
}
