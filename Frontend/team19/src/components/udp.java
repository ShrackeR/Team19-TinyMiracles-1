//UDP Server
import java.net.*;
import java.io.*;
import java.lang.*;
import java.util.*;



public class udp {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Are you User 1 or User 2? (Enter 1 or 2):");
        int p = sc.nextInt();
        if(!(p==1 || p==2)) {
            System.out.println("Invalid Input!");
            System.exit(1);
        }
        System.out.println("Enter the Other User's Nickname: ");
        String nickname = sc.next();
        System.out.println("Enter " + nickname + "'s IP Address: ");
        String hostname = sc.next();
        sc.close();
        Receiver rec = new Receiver(p, nickname, hostname);
        rec.start();

        
    }
}

class Receiver extends Thread {
    int p, port;
    String nickname, hostname;
    Receiver(int ap, String anickname, String ahostname) {
        p = ap;
        nickname = anickname;
        hostname = ahostname;
    }
    public void run() {
        // System.out.println("Enter the Receiver Port Number: ");
        if(p == 1) {
            port = 9;
        } else {
            port = 10;
        }
        byte[] buffer = new byte[65507];
        try {
            DatagramSocket server = new DatagramSocket(port);
            DatagramPacket packet = new DatagramPacket(buffer, buffer.length);
            Sender send = new Sender(p, nickname, hostname);
            send.start();
            System.out.println("Receiving Chats Now...");
            while (true) {
                try {
                    server.receive(packet);
                    String s = new String(packet.getData(), 0, packet.getLength());
                    if(s.equals("exit"))
                        break;
                    System.out.println(nickname + " says: " + s);
                    // reset the length for the next packet
                    packet.setLength(buffer.length);
                } catch (Throwable e) {
                    e.printStackTrace();
                }
            } // end while
            server.close();
        } // end try
        catch (Throwable e) {
            e.printStackTrace();
        } // end catch
    }
}

class Sender extends Thread {
    int p, port;
    String nickname, hostname;
    Sender(int ap, String anickname, String ahostname) {
        p = ap;
        nickname = anickname;
        hostname = ahostname;
    }
    public void run() {
        
        if(p == 1) {
            port = 10;
        } else {
            port = 9;
        }
        try {
            InetAddress server = InetAddress.getByName(hostname);
            BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));
            DatagramSocket theSocket = new DatagramSocket();
            System.out.println("Start Sending Chats now...!");
            while (true) {
                String theLine = userInput.readLine();
                if (theLine.equals("exit"))
                    break;
                byte[] data = theLine.getBytes();
                DatagramPacket theOutput = new DatagramPacket(data, data.length, server, port);
                theSocket.send(theOutput);
            } // end while
            theSocket.close();
        } // end try
        catch (Throwable e) {
            e.printStackTrace();
        }
    } // end of sender()
}